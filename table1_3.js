var template = template || {};
template.table1_3 = `
<% if(居住信息) { %>
    <h4>（三）居住信息</h4>
    <table>
        <tr>
            <th>编号</th>
            <th>居住地址</th>
            <th>住宅电话</th>
            <th>居住状况</th>
            <th>信息更新日期</th>
        </tr>
        <% 居住信息.forEach((item, index) => { %>
            <tr class="center">
                <td><%= index + 1 %></td>
                <td><%= item.居住地址 %></td>
                <td><%= item.住宅电话 %></td>
                <td><%= item.居住状况 %></td>
                <td><%= item.信息更新日期 %></td>
            </tr>
        <% }) %>
    </table>
<% } %>
`;
