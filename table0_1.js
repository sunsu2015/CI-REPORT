var template = template || {};
template.table0_1 = `
<% if(报告概要) { %>
    <table>
        <tr>
            <td colspan="3">报告编号：<%= 报告概要.报告编号 %></td>
            <td colspan="2" style="text-align: right">报告时间：<%= 报告概要.报告时间 %></td>
        </tr>
        <tr>
            <th>被查询者姓名</th>
            <th>被查询者证件类型</th>
            <th>被查询者证件号码</th>
            <th>查询机构</th>
            <th>查询原因</th>
        </tr>
        <tr class="center">
            <td><%= 报告概要.被查询者姓名 %></td>
            <td><%= 报告概要.被查询者证件类型 %></td>
            <td><%= 报告概要.被查询者证件号码 %></td>
            <td><%= 报告概要.查询机构 %></td>
            <td><%= 报告概要.查询原因 %></td>
        </tr>
    </table>
<% } %>
`;
