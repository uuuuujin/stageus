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

    
    
    try {

        String id = request.getParameter("id");
        String password = request.getParameter("password");
        String name = request.getParameter("name");
        int phone = Integer.parseInt(request.getParameter("phone"));
        String school = request.getParameter("school");

        
        Class.forName("com.mysql.jdbc.Driver");

        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/user", "ubuntu", "1234");


        sql = "select * from user where id = ?";
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, id);
        ResultSet rs = pstmt.executeQuery();
        
        if(rs.next()) {
            %>
            <script>
                alert("이미 존재하는 아이디 입니다");
                location.href = 'signuppage.html';
            </script>
            <%
        } else {
            sql = "insert into user(id, password, name, phone, school) values (?,?,?,?,?)"; 
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, id);
            pstmt.setString(2, password);
            pstmt.setString(3, name);
            pstmt.setInt(4, phone);
            pstmt.setString(5, school);
            pstmt.executeUpdate();
            %>
            <script>
                alert("회원가입 되었습니다~!");
                location.href = 'loginpage.html';
            </script>
            <%
        }    
        
    } catch (Exception e) {
        %>
        <script>
            alert("전화 번호에는 숫자만 입력해주세요");
            location.href = 'signuppage.html';
        </script>
        <%
        e.printStackTrace();
    } finally {
        if (pstmt != null)try {pstmt.close();} catch (SQLException ex) {}
        if (conn != null)try {conn.close();   } catch (SQLException ex) {}
    }
%>
