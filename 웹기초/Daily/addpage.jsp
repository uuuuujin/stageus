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
    request.setCharacterEncoding("utf-8");
    String id = request.getParameter("id");
%>

<div class="wrap">
    <div class="logo">Daily</div>
    <div class="schedule_wrap">
        <form id="add_form">
            <input type="text" name="date" class="date" placeholder="yymmdd" maxlength="6" required>
            <textarea name="content" id="content" cols="50" rows="10" required></textarea>
            <button onclick="scheduleAdd()">추가</button>
        </form>
    </div>
</div>

<script>
    function scheduleAdd() {
        var form = document.getElementById("add_form");
        form.setAttribute("charset","UTF-8");
        form.setAttribute("method","Post");
        form.setAttribute("action","scheduleAdd.jsp");
    
        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", "id")
        input.setAttribute("value", "<%=id%>");

        form.appendChild(input);
        
        document.body.appendChild("form");
        form.submit();
    }
</script>
<body>





    