<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.SQLException"%>


<body>
<%
    Connection conn = null;
    PreparedStatement pstmt = null;
    String sql = "";

    request.setCharacterEncoding("utf-8");

    int num = Integer.parseInt(request.getParameter("num"));
    String id = request.getParameter("id");
    int date = Integer.parseInt(request.getParameter("date"));
    String content = request.getParameter("content");

        Class.forName("com.mysql.jdbc.Driver");
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/user", "ubuntu", "1234");
    
        sql = "UPDATE daily SET date = ?, content = ? WHERE num = ?";
        pstmt = conn.prepareStatement(sql);
        pstmt.setInt(1, date);
        pstmt.setString(2, content);
        pstmt.setInt(3, num);
    
        pstmt.executeUpdate();
        pstmt.close();
        conn.close();
%>

    <script>
        alert("수정되었습니다!")
        var form = document.createElement("form");
        form.setAttribute("charset","UTF-8");
        form.setAttribute("method","Post");
        form.setAttribute("action","mainpage.jsp");

        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", "id");
        input.setAttribute("value", "<%=id%>");
        form.appendChild(input);

        document.body.appendChild(form);
        form.submit();
        
    </script>


</body>