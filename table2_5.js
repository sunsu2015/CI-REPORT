var template = template || {};
template.table2_5 = `
<% if(非信贷交易信息概要) { %>
    <h4>（五）非信贷交易信息概要</h4>
    <% if (非信贷交易信息概要.后付费业务欠费信息汇总) { %>
        <table>
            <tr>
                <th colspan="3">后付费业务欠费信息汇总</th>
            </tr>
            <tr>
                <th>业务类型</th>
                <th>账户数</th>
                <th>欠费金额</th>
            </tr>
            <% 非信贷交易信息概要.后付费业务欠费信息汇总.forEach(item => { %>
                <tr class="center">
                    <td><%= item.业务类型 %></td>
                    <td><%= item.账户数 %></td>
                    <td><%= formate.amount(item.欠费金额) %></td>
                </tr>
            <% }) %>
        </table>
    <% } %>
<% } %>
`;
