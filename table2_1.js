var template = template || {};
template.table2_1 = `
<% if(个人信用报告数字解读) { %>
    <h4>（一）个人信用报告“数字解读”</h4>
    <table>
        <tr>
            <th>数字解读</th>
            <th>相对位置</th>
            <th>说明</th>
        </tr>
        <% 个人信用报告数字解读.说明.forEach((item, index, arr) => { %>
            <tr class="center">
                <% if(!index) { %>
                    <td rowspan="<%= 个人信用报告数字解读.说明.length %>"><%= 个人信用报告数字解读.数字解读 %></td>
                <% } %>
                <% if(!index) { %>
                    <td rowspan="<%= 个人信用报告数字解读.说明.length %>"><%= 个人信用报告数字解读.相对位置 %></td>
                <% } %>
                <td><%= item %></td>
            </tr>
        <% }) %>
        
    </table>
<% } %>
`;
