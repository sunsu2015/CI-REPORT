var template = template || {};
template.table2_6 = `
<% if(公共信息概要) { %>
    <h4>（六）公共信息概要</h4>
    <% if (公共信息概要.公共信息汇总) { %>
        <table>
            <tr>
                <th colspan="3">公共信息汇总</th>
            </tr>
            <tr>
                <th>信息类型</th>
                <th>记录数</th>
                <th>涉及金额</th>
            </tr>
            <% 公共信息概要.公共信息汇总.forEach(item => { %>
                <tr class="center">
                    <td><%= item.信息类型 %></td>
                    <td><%= item.记录数 %></td>
                    <td><%= formate.amount(item.涉及金额) %></td>
                </tr>
            <% }) %>
        </table>
    <% } %>
<% } %>
`;
