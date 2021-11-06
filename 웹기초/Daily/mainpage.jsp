<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.SQLException"%>

<%@page import="java.util.Date" %>
<%@page import="java.text.SimpleDateFormat" %>


<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Marck+Script&family=Yellowtail&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
    <title>Daily</title>
</head>

<body>
<%
    Date now = new Date();
    SimpleDateFormat sf = new SimpleDateFormat("yyMMdd");
    SimpleDateFormat sf2 = new SimpleDateFormat("yy-MM-dd");
    String today = sf.format(now);
    String today2 = sf2.format(now);
    Date currentDate = sf.parse(today);
    Date scheduleDate;


    Connection conn = null;
    PreparedStatement pstmt = null;
    String sql = "";
    request.setCharacterEncoding("utf-8");

    String id = request.getParameter("id");

    Class.forName("com.mysql.jdbc.Driver");
    conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/user", "ubuntu", "1234");

    sql = "select * from daily where id = ? order by date";
    pstmt = conn.prepareStatement(sql);

    pstmt.setString(1, id);
    ResultSet rs = pstmt.executeQuery();
    
%>
    <div class="main">
        <div class="wrap">
            <div class="header">
                <div class="logo">Daily</div>
                <div class="id">
                    <span><%=id%></span>
                    <span>님의 일정</span>
                </div>
                <button class="add" onclick="addpage()">일정 추가</button>
            </div>
            <div id="board" class="list">
                <span class="currentDate">오늘은 <%=today2%> 입니다</span>
                <%while(rs.next()){
                    String strDate = Integer.toString(rs.getInt(3));
                    scheduleDate = sf.parse(strDate);
                    int compare = currentDate.compareTo(scheduleDate);
                    if(compare>0){
                        %>
                        <table class="element">
                            <tr class="tr">
                                <td class="date" style="color: red;"><%=rs.getInt(3)%></td>
                                <td class="content" style="color: red;">
                                    <%=rs.getString(4)%>
                                </td>
                                <td class="btn">
                                    <button onclick="scheduleDelete('<%=rs.getInt(1)%>')">삭제</button>
                                    <button onclick="scheduleEdit('<%=rs.getInt(1)%>')">수정</button>
                                </td>
                            </tr>
                        </table>
                    <% } else { %>
                        <table class="element">
                            <tr class="tr">
                                <td class="date"><%=rs.getInt(3)%></td>
                                <td class="content">
                                    <%=rs.getString(4)%>
                                </td>
                                <td class="btn">
                                    <button onclick="scheduleDelete('<%=rs.getInt(1)%>')">삭제</button>
                                    <button onclick="scheduleEdit('<%=rs.getInt(1)%>')">수정</button>
                                </td>
                            </tr>
                        </table>
                    <%}  
                }%>
            </div>
        </div>
    </div>

    <script>

        function addpage() {
            var form = document.createElement("form");
            form.setAttribute("charset","UTF-8");
            form.setAttribute("method","Post");
            form.setAttribute("action","addpage.jsp");
        
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", "id");
            input.setAttribute("value", "<%=id%>");
            form.appendChild(input);
        
            document.body.appendChild(form);
            form.submit();
        }

        function scheduleDelete(number) {
            var test = confirm("정말 삭제하시겠습니까?");
            if(test){
                var form = document.createElement("form");
                form.setAttribute("charset","UTF-8");
                form.setAttribute("method","Post");
                form.setAttribute("action","deleteDB.jsp");
            
                var input = document.createElement("input");
                input.setAttribute("type", "hidden");
                input.setAttribute("name", "num");
                input.setAttribute("value", number);
                form.appendChild(input);

                var input2 = document.createElement("input");
                input2.setAttribute("type", "hidden");
                input2.setAttribute("name", "id");
                input2.setAttribute("value", "<%=id%>");
                form.appendChild(input2);

                document.body.appendChild(form);
                form.submit();
            }
        }

        function scheduleEdit(number) {
            var form = document.createElement("form");
            form.setAttribute("charset","UTF-8");
            form.setAttribute("method","Post");
            form.setAttribute("action","showSchedule.jsp");
        
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", "num");
            input.setAttribute("value", number);
            form.appendChild(input);

            var input2 = document.createElement("input");
            input2.setAttribute("type", "hidden");
            input2.setAttribute("name", "id");
            input2.setAttribute("value", "<%=id%>");
            form.appendChild(input2);

            document.body.appendChild(form);
            form.submit();
        }

    </script> 
    

   
    

<%
    rs.close();
    pstmt.close();
    conn.close();
%>

</body>
