import {songs} from "./songs.js";

dataSetVersion = "2025-02-02"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by type of songs",
        key: "singer",
        tooltip: "Check this to show songs",
        checked: true,
        sub: [
            {name: "INS", key: "INS", checked: true},
            {name: "OP", key: "OP", checked: true},
            {name: "ED", key: "ED", checked: true}
        ]
    }
];

dataSet[dataSetVersion].characterData = [
    ...songs
];
