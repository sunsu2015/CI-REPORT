var template = template || {};
template.table1_4 = `
<% if(职业信息) { %>
    <h4>（四）职业信息</h4>
    <table>
        <tr>
            <th>编号</th>
            <th>工作单位</th>
            <th>单位性质</th>
            <th colspan="3">单位地址</th>
            <th>单位电话</th>
        </tr>
        <% 职业信息.第一部分.forEach((item, index) => { %>
            <tr class="center">
                <td><%= index + 1 %></td>
                <td><%= item.工作单位 %></td>
                <td><%= item.单位性质 %></td>
                <td colspan="3"><%= item.单位地址 %></td>
                <td><%= item.单位电话 %></td>
            </tr>
        <% }) %>
        <tr>
            <th>编号</th>
            <th>职业</th>
            <th>行业</th>
            <th>职务</th>
            <th>职称</th>
            <th>进入本单位年份</th>
            <th>信息更新日期</th>
        </tr>
        <% 职业信息.第二部分.forEach((item, index) => { %>
            <tr class="center">
                <td><%= index + 1 %></td>
                <td><%= item.职业 %></td>
                <td><%= item.行业 %></td>
                <td><%= item.职务 %></td>
                <td><%= item.职称 %></td>
                <td><%= item.进入本单位年份 %></td>
                <td><%= item.信息更新日期 %></td>
            </tr>
        <% }) %>
    </table>
<% } %>
`;
