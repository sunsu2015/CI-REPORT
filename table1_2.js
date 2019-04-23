var template = template || {};
template.table1_2 = `
<% if(配偶信息) { %>
    <h4>（二）配偶信息</h4>
    <table>
        <tr>
            <th>姓名</th>
            <th>证件类型</th>
            <th>证件号码</th>
            <th>工作单位</th>
            <th>联系电话</th>
        </tr>
        <tr class="center">
            <td><%= 配偶信息.姓名 %></td>
            <td><%= 配偶信息.证件类型 %></td>
            <td><%= 配偶信息.证件号码 %></td>
            <td><%= 配偶信息.工作单位 %></td>
            <td><%= 配偶信息.联系电话 %></td>
        </tr>
    </table>
<% } %>
`;
