var template = template || {};
template.table1_1 = `
<% if(身份信息) { %>
    <h4>（一）身份信息</h4>
    <table>
        <tr>
            <th>性别</th>
            <th>出生日期</th>
            <th>婚姻状况</th>
            <th>学历</th>
            <th>学位</th>
            <th>就业状况</th>
            <th>国籍</th>
            <th>电子邮箱</th>
        </tr>
        <tr class="center">
            <td><%= 身份信息.性别 %></td>
            <td><%= 身份信息.出生日期 %></td>
            <td><%= 身份信息.婚姻状况 %></td>
            <td><%= 身份信息.学历 %></td>
            <td><%= 身份信息.学位 %></td>
            <td><%= 身份信息.就业状况 %></td>
            <td><%= 身份信息.国籍 %></td>
            <td><%= 身份信息.电子邮箱 %></td>
        </tr>
        <tr>
            <th colspan="5">通讯地址</th>
            <th colspan="3">户籍地址</th>
        </tr>
        <tr class="center">
            <td colspan="5"><%= 身份信息.通讯地址 %></td>
            <td colspan="3"><%= 身份信息.户籍地址 %></td>
        </tr>
        <tr>
            <th colspan="1">编号</th>
            <th colspan="4">手机号码</th>
            <th colspan="3">信息更新日期</th>
        </tr>
        <% 身份信息.手机号码.forEach((item, index) => { %>
            <tr class="center">
                <td colspan="1"><%= index + 1 %></td>
                <td colspan="4"><%= item.手机号码 %></td>
                <td colspan="3"><%= item.信息更新日期 %></td>
            </tr>
        <% }) %>
    </table>
<% } %>
`;
