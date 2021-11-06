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
    <link rel="stylesheet" href="edit.css">
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

    int num = Integer.parseInt(request.getParameter("num"));
    String id = request.getParameter("id");

    Class.forName("com.mysql.jdbc.Driver");
    conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/user", "ubuntu", "1234");

    sql = "select * from daily where num = ?";
    pstmt = conn.prepareStatement(sql);

    pstmt.setInt(1, num);
    ResultSet rs = pstmt.executeQuery();
    rs.next();
%>

    <div class="wrap">
        <div class="logo">Daily</div>
        <div class="schedule_wrap">
            <form id="edit_form">
                <input type="text" name="date" class="date" placeholder="날짜" maxlength="6" value="<%=rs.getInt(3)%>" required>
                <textarea name="content" id="content" cols="50" rows="10" required><%=rs.getString(4)%></textarea>
                <button type="button" onclick="scheduleEdit()">수정</button>
            </form>
        </div>
    </div>

    <script>
        function scheduleEdit() {
            var test = confirm("적용하시겠습니까?");
            if(test) {
                var form = document.getElementById("edit_form");
                form.setAttribute("charset","UTF-8");
                form.setAttribute("method","Post");
                form.setAttribute("action","editDB.jsp");
            
                var input = document.createElement("input");
                input.setAttribute("type", "hidden");
                input.setAttribute("name", "id")
                input.setAttribute("value", "<%=id%>");
                form.appendChild(input);

                var input2 = document.createElement("input");
                input2.setAttribute("type", "hidden");
                input2.setAttribute("name", "num");
                input2.setAttribute("value", "<%=num%>");
                form.appendChild(input2);
                
                form.submit();
            } 
        }
    </script>
</body>