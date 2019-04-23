var template = template || {};
template.table0_3 = `
<% if(防欺诈警示标志) { %>
    <table>
        <tr>
            <th colspan="2">防欺诈警示标志</th>
        </tr>
        <tr class="center">
            <td colspan="2">信息主体申请设置防欺诈警示，联系电话：010—90000000/13900000000。</td>
        </tr>
        <tr>
            <th>生效日期</th>
            <th>截止日期</th>
        </tr>
        <tr class="center">
            <td><%= 防欺诈警示标志.生效日期 %></td>
            <td><%= 防欺诈警示标志.截止日期 %></td>
        </tr>
    </table>
<% } %>
`;