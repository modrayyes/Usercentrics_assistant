// let uc_data = document.getElementById("btn-uc-data") as HTMLElement;
// let uc_scripts = document.getElementById("btn-scripts") as HTMLElement;
// let uc_consents = document.getElementById("btn-consents") as HTMLElement;
// let uc_data_layer = document.getElementById("btn-data-layer") as HTMLElement;
// let uc_inject_cmp = document.getElementById("btn-inject-cmp") as HTMLElement;
// let div = document.getElementById('config-data') as HTMLElement;
// let count = 0;

// uc_data.onclick = function() {
//     let queryOptions = { active: true, currentWindow: true };
//     chrome.tabs.query(queryOptions, (tabs) => {

//         chrome.tabs.executeScript(
//             tabs[0].id, { file: 'js/get_config_data.js' }
//         );
//     });

//     /* if (count === 0) {
//         insertSettingsIdOnPopup(count);
//         count = 1;
//     } */
// }

// uc_scripts.onclick = function() {
//     let queryOptions = { active: true, currentWindow: true };
//     chrome.tabs.query(queryOptions, (tabs) => {

//         chrome.tabs.executeScript(
//             tabs[0].id, { file: 'js/get_scripts.js' }
//         );
//     });
// }

// uc_data_layer.onclick = function() {
//     let queryOptions = { active: true, currentWindow: true };
//     chrome.tabs.query(queryOptions, (tabs) => {

//         chrome.tabs.executeScript(
//             tabs[0].id, { file: 'js/get_data_layer.js' }
//         );
//     });
// }

// uc_consents.onclick = function() {
//     let queryOptions = { active: true, currentWindow: true };
//     chrome.tabs.query(queryOptions, (tabs) => {

//         chrome.tabs.executeScript(
//             tabs[0].id, { file: 'js/get_consents.js' }
//         );
//     });
// }

// uc_inject_cmp.onclick = function() {
//     let queryOptions = { active: true, currentWindow: true };
//     chrome.tabs.query(queryOptions, (tabs) => {

//         chrome.tabs.executeScript(
//             tabs[0].id, { file: 'js/inject_cmp.js' }
//         );
//     });
// }


