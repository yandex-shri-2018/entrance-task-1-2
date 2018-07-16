function getTableRowHtml(obj) {
    return `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.operator}</td>
        </tr>
    `;
}

export function getPopupContent(obj) {

    const htmlStatus = obj.isActive
        ? `<div class="station-info-active">active</div>`
        : `<div class="station-info-defective">defective</div>`

    let content = `
        <div class="station-info">
            <div class="station-info-label">base stations</div>
            <div class="station-info-title">${obj.serialNumber}</div>
            ${htmlStatus}
            <div class="station-info-connections">${obj.connections}</div>
        </div>
    `;

    if (obj.isActive) {
        const htmlRows = obj.drones.map(getTableRowHtml).join('\n');

        const htmlTable = `
            <table class="station-info-drones-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>operator</th>
                    </tr>
                </thead>
                <tbody>
                    ${htmlRows}
                </tbody>
            </table>
        `;

        htmlInfo += htmlTable;
    }

    return content;
}