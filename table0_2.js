var template = template || {};
template.table0_2 = `
<% if(其他证件信息) { %>
    <table>
        <tr>
            <th colspan="2">其他证件信息</th>
        </tr>
        <tr>
            <th>证件类型</th>
            <th>证件号码</th>
        </tr>
        <% 其他证件信息.forEach(item=>{ %>
            <tr class="center">
                <td><%= item.证件类型 %></td>
                <td><%= item.证件号码 %></td>
            </tr>
        <% }) %>
    </table>
<% } %>
`;