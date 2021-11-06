<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.SQLException"%>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="add.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Marck+Script&family=Yellowtail&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
    <title>Daily</title>
</head>

<body>
<%
    Connection conn = null;
    PreparedStatement pstmt = null;
    String sql = "";

    request.setCharacterEncoding("utf-8");

    

    try {
        String id = request.getParameter("id");
        int date = Integer.parseInt(request.getParameter("date"));
        String content = request.getParameter("content");
        Class.forName("com.mysql.jdbc.Driver");
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/user", "ubuntu", "1234");
        sql = "insert into daily(id, date, content) values (?,?,?)";
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, id);
        pstmt.setInt(2, date);
        pstmt.setString(3, content);
        pstmt.executeUpdate(); 
        %>
        <script>
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
            alert("일정이 추가되었습니다!");
        </script>

    <%
    } catch (Exception e) {
        %>
        <script>
            alert("날짜에 yymmdd 형식으로 입력해주세요");
            location.href = 'addpage.jsp';
        </script>
        <%
        e.printStackTrace();
    } finally {
        if (pstmt != null)try {pstmt.close();} catch (SQLException ex) {}
        if (conn != null)try {conn.close();   } catch (SQLException ex) {}
    }
%>
<body>







    