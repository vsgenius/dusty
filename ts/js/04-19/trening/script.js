function firstTask() {
    const data = {
        'invocation-info': {
          'req-id': "8Mdmb4yY",
          hostname: "bl77l2gjxw3c4wmu.vla.yp-c.yandex.net",
          'exec-duration-millis': 8,
          action: "getMySettingsFront",
          'app-name': "startrek-b2b",
          'app-version': "1"
        },
        data: {
          language: "ru",
          followersStyle: "name",
          expandLinks: false,
          mainPageStyle: {
            value: {
              id: 1,
              display: "Мой дашборд"
            },
            type: "dashboard"
          },
          mainPageStyleExtended: {
            type: "myPage"
          },
          receiveOwnEvents: false,
          inheritParentValues: false,
          showExactTime: false,
          showSprintAndBacklogInOneColumn: false,
          klingon: false,
          includeEventTypeInEmailSubject: true,
          lettersSenderDisplayStyle: "loginAndName",
          showGaps: true,
          disableReplyLine: false,
          blockAllGuides: false,
          preferLogin: false,
          preferIconsInLists: false,
          summonTransports: "email",
          newCommentsOnTop: false,
          useNewFilters: true,
          useNewMyIssues: true,
          appTheme: "system",
          queueInfo: {
            id: "63c7c403e9b2651fa8895ede",
            display: "Homeworks",
            key: "HOMEWORKS",
            version: 4,
            name: "Homeworks",
            assignAuto: false,
            denyVoting: false,
            denyConductorAutolink: false,
            denyTrackerAutolink: false,
            useComponentPermissionsIntersection: false,
            workflowActionsStyle: "buttons",
            ownPermissions: [
              "READ",
              "CREATE",
              "WRITE",
              "WRITE-NO-ASSIGN",
              "GRANT"
            ],
            useLastSignature: false,
            presetKey: "developmentPreset",
            untouched: false
          }
        }
      }
      console.log(data["invocation-info"].hostname);
      console.log(data.data.mainPageStyleExtended.type);
      console.log(data.data.lettersSenderDisplayStyle)
      console.log(data.data.queueInfo.ownPermissions[3])
}
//firstTask();
function secondTask(data) {
    let objectEntries = [];
    let objectKeys = [];
    let objectValues = [];
    for (const key in data) {
        objectEntries.push([key,data[key]]);
        objectKeys.push(key);
        objectValues.push(data[key]);
    }
    console.log('Object.entries: ',objectEntries);
    console.log('Object.keys: ', objectKeys);
    console.log('Object.values: ',objectValues);
}
//secondTask({key1:'value1',key2:'value2',key3:'value3'})


function thirdTask(data) {
    let result = []
    for (const key in data) {
        if (typeof data[key] === 'object' && data[key] !== null) {
            for (const it of data[key]) {
                result.push(it);
            }
        }
    }
    console.log(result);
}
// thirdTask({ first: [1, 'omg'], second: [12, 24], third: 'lol' });
// thirdTask({});
// thirdTask({ third: 'lol' });

function forthTask(data1,data2) {
    const keys1 = Object.keys(data1);
    const keys2 =Object.keys(data2);
    const values1 = Object.values(data1);
    const values2 = Object.values(data2)
    if (keys1.length !== keys2.length && values1.length!==values2.length) {
        return false;
    } 
    let result = true;
    for (const key in data1) {
        if (!Object.hasOwnProperty.call(key) && data1[key]!==data2[key]) {
            return false;
        }
    }
    return true;
}
// console.log(forthTask({ first: 1, second: 2 },{ second: 2, first: 1 }))
// console.log(forthTask({ first: 1, second: 2 },{ second: 2, first: 1, third: 'lol' }))
// console.log(forthTask({ first: 1, second: 2, third: undefined },{ second: 2, first: 1, third: 'lol' }))
// console.log(forthTask({},{}))