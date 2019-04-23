var template = template || {};
template.table2_2 = `
<% if(信贷交易信息提示) { %>
    <h4>（二）信贷交易信息提示</h4>
    <table>
        <tr>
            <th colspan="2">业务类型</th>
            <th>账户数</th>
            <th>首笔业务发放月份</th>
        </tr>
        <% var accountNumber = 0; 信贷交易信息提示.贷款.forEach((item, index)=> { accountNumber += item.账户数 %>
            <tr class="center">
                <% if(!index) { %>
                    <th rowspan="3">贷款</th>
                <% } %>
                <th><%= item.业务类型 %></th>
                <td><%= item.账户数 %></td>
                <td><%= item.首笔业务发放月份 %></td>
            </tr>
        <% }) %>
        <% 信贷交易信息提示.信用卡.forEach((item, index)=> { accountNumber += item.账户数 %>
            <tr class="center">
                <% if(!index) { %>
                    <th rowspan="2">信用卡</th>
                <% } %>
                <th><%= item.业务类型 %></th>
                <td><%= item.账户数 %></td>
                <td><%= item.首笔业务发放月份 %></td>
            </tr>
        <% }) %>
        <% 信贷交易信息提示.其他.forEach((item, index)=> { accountNumber += item.账户数 %>
            <tr class="center">
                <% if(!index) { %>
                    <th>其他</th>
                <% } %>
                    <th><%= item.业务类型 %></th>
                    <td><%= item.账户数 %></td>
                    <td><%= item.首笔业务发放月份 %></td>
            </tr>
        <% }) %>
        <tr class="center">
            <th colspan="2">合计</th>
            <td><%= accountNumber %></td>
            <td>--</td>
        </tr>
    </table>
<% } %>
`;
