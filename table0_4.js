var template = template || {};
template.table0_4 = `
<% if(防欺诈警示标志) { %>
    <table>
        <tr>
            <th colspan="2">异议信息提示</th>
        </tr>
        <tr class="center">
            <td colspan="2">信息主体对信用报告内容提出了<%= 异议信息提示.处理中%> 笔异议且正在处理中，请浏览时注意阅读相关内容。</td>
        </tr>
    </table>
<% } %>
`;
