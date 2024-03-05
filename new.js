let xmlString = `...`; // Thay thế '...' bằng nội dung XML của bạn

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Tìm tất cả các thẻ 'Tag'
let tags = xmlDoc.getElementsByTagName('Tag');

let firstAppearance, lastAppearance;

for (let i = 0; i < tags.length; i++) {
    if (tags[i].textContent === 'E2801191A503006340956381') {
        // Tìm thẻ 'Time' và 'Date' cha của thẻ 'Tag'
        let timeNode = tags[i].parentNode;
        let dateNode = timeNode.parentNode;

        let time = timeNode.getAttribute('Time');
        let date = dateNode.getAttribute('Day');

        if (!firstAppearance) {
            firstAppearance = {time, date};
        }

        lastAppearance = {time, date};
    }
}

if (firstAppearance) {
    console.log(`Thẻ E2801191A503006340956381 xuất hiện lần đầu tiên vào lúc ${firstAppearance.time} ngày ${firstAppearance.date}`);
}

if (lastAppearance) {
    console.log(`Thẻ E2801191A503006340956381 xuất hiện lần cuối cùng vào lúc ${lastAppearance.time} ngày ${lastAppearance.date}`);
}
