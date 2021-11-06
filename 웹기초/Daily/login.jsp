<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.SQLException"%>


<body>
    
<%
    String tmp = "";

    Connection conn = null;
    PreparedStatement pstmt = null;
    String sql = "";

    request.setCharacterEncoding("utf-8");

    String id = request.getParameter("id");
    String pass = request.getParameter("password");
    
    try {
        tmp = "0";
        Class.forName("com.mysql.jdbc.Driver");
        tmp = "1";
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/user", "ubuntu", "1234");
        tmp = "2";
        sql = "select * from user where id = ?"; 
        pstmt = conn.prepareStatement(sql);

        pstmt.setString(1, id);
        ResultSet rs = pstmt.executeQuery();
        String password;
        rs.next();
        password = rs.getString("password");

        
        if(password.equals(pass)){
%>
            <script>
                alert("로그인 되었습니다.");
                function idsend() {
                    var form = document.createElement("form");
                    form.setAttribute("charset","UTF-8");
                    form.setAttribute("method","Post");
                    form.setAttribute("action","mainpage2.jsp");

                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    input.setAttribute("name", "id");
                    input.setAttribute("value", "<%rs.getString(1)%>");
                    form.appendChild(input);

                    document.body.appendChild(form);
                    form.submit();
                }
                
            </script>
<%
        }else{
%>
            <script>
                alert("비밀번호가 틀렸습니다.");
                location.href = 'loginpage.html';
            </script>
<%
        }
    }
    catch (Exception e) {
%>
        <script>
            alert("아이디를 확인하세요" + <%=tmp%>);
            location.href = 'loginpage.html';
        </script>
<%
        e.printStackTrace();
    } finally {
       
        if (pstmt != null)try {pstmt.close();} catch (SQLException ex) {}
        if (conn != null)try {conn.close();} catch (SQLException ex) {}
    }
%>

</body>