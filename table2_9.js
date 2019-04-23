var template = template || {};
template.table2_9 = `
<% if(查询记录概要) { %>
    <h4>（九）查询记录概要</h4>
    <% if (查询记录概要.上一次查询记录) { %>
        <table>
            <tr>
                <th colspan="3">上一次查询记录</th>
            </tr>
            <tr class="center">
                <td><%= 查询记录概要.上一次查询记录.时间 %></td>
                <td><%= 查询记录概要.上一次查询记录.机构 %></td>
                <td><%= 查询记录概要.上一次查询记录.原因 %></td>
            </tr>
        </table>
    <% } %>
    <% if (查询记录概要.最近查询记录) { %>
        <table>
            <tr>
                <th colspan="2">最近1个月内的查询机构数</th>
                <th colspan="3">最近1个月内的查询次数</th>
                <th colspan="3">最近2年内的查询次数</th>
            </tr>
            <tr class="center">
                <td>贷款审批</td>
                <td>信用卡审批</td>
                <td>贷款审批</td>
                <td>信用卡审批</td>
                <td>本人查询</td>
                <td>贷后管理</td>
                <td>担保资格审查</td>
                <td>特约商户实名审查</td>
            </tr>
            <tr class="center">
                <td><%= 查询记录概要.最近查询记录.最近1个月内的查询机构数.贷款审批 %></td>
                <td><%= 查询记录概要.最近查询记录.最近1个月内的查询机构数.信用卡审批 %></td>
                <td><%= 查询记录概要.最近查询记录.最近1个月内的查询次数.贷款审批 %></td>
                <td><%= 查询记录概要.最近查询记录.最近1个月内的查询次数.信用卡审批 %></td>
                <td><%= 查询记录概要.最近查询记录.最近1个月内的查询次数.本人查询 %></td>
                <td><%= 查询记录概要.最近查询记录.最近2年内的查询次数.贷后管理 %></td>
                <td><%= 查询记录概要.最近查询记录.最近2年内的查询次数.担保资格审查 %></td>
                <td><%= 查询记录概要.最近查询记录.最近2年内的查询次数.特约商户实名审查 %></td>
            </tr>
        </table>
    <% } %>
    <% if (查询记录概要.异议及说明信息) { %>
        <table>
            <tr>
                <th colspan="2">异议及说明信息</th>
            </tr>
            <tr>
                <th>异议标注</th>
                <th>添加日期</th>
            </tr>
            <% 查询记录概要.异议及说明信息.forEach(item=> { %>
                <tr class="center">
                    <td><%= item.异议标注 %></td>
                    <td><%= item.添加日期 %></td>
                </tr>
            <% }) %>
        </table>
    <% } %>
<% } %>
`;