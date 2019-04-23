var template = template || {};
template.table3_1 = `
<% if(被追偿信息) { %>
    <h4>（一）被追偿信息</h4>
    <% 被追偿信息.forEach(item=> { %>
        <span><%= item.账户 %></span>
    <% }) %>
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
