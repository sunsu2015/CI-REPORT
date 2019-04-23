var template = template || {};
template.table2_3 = `
<% if(信贷交易违约信息概要) { %>
    <h4>（三）信贷交易违约信息概要</h4>
    <% if (信贷交易违约信息概要.被追偿信息汇总) { %>
        <table>
            <tr>
                <th colspan="3">被追偿信息汇总</th>
            </tr>
            <tr>
                <th>业务类型</th>
                <th>账户数</th>
                <th>余额</th>
            </tr>
            <% var accountNumber = 0, balance = 0; 信贷交易违约信息概要.被追偿信息汇总.forEach(item => { accountNumber += item.账户数, balance += item.余额;%>
                <tr class="center">
                    <th><%= item.业务类型 %></th>
                    <td><%= item.账户数 %></td>
                    <td><%= formate.amount(item.余额) %></td>
                </tr>
            <% }) %>
            <tr class="center">
                <th>合计</th>
                <td><%= accountNumber %></td>
                <td><%= formate.amount(balance) %></td>
            </tr>
        </table>
    <% } %>
    <% if (信贷交易违约信息概要.呆账信息汇总) { %>
        <table>
            <tr>
                <th colspan="2">呆账信息汇总</th>
            </tr>
            <tr>
                <th>账户数</th>
                <th>余额</th>
            </tr>
            <tr class="center">
                <td><%= 信贷交易违约信息概要.呆账信息汇总.账户数 %></td>
                <td><%= formate.amount(信贷交易违约信息概要.呆账信息汇总.余额) %></td>
            </tr>
        </table>
    <% } %>
    <% if (信贷交易违约信息概要.逾期透支信息汇总) { %>
        <table>
            <tr>
                <th colspan="5">逾期（透支）信息汇总</th>
            </tr>
            <tr>
                <th>账户类型</th>
                <th>账户数</th>
                <th>月份数</th>
                <th>单月最高逾期/透支总额</th>
                <th>最长逾期/透支月数</th>
            </tr>
            <% 信贷交易违约信息概要.逾期透支信息汇总.forEach(item => { %>
                <tr class="center">
                    <td><%= item.账户类型 %></td>
                    <td><%= item.账户数 %></td>
                    <td><%= item.月份数 %></td>
                    <td><%= formate.amount(item.透支总额) %></td>
                    <td><%= item.透支月数 %></td>
                </tr>
            <% }) %>
        </table>
    <% } %>
<% } %>
`;
