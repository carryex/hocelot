import * as axios from "axios";
import {
  initialFileColumnsData,
  initialVariablesData,
} from "./responses";

const instance = axios.create({
  baseURL: "https://gke-goliath-dev-eu.hocelot.com/",
    headers: {
      Authorization: "Basic YXBpOi5IMGMzNHAxMjAyMCE="
    },
});

export const api = {
  getFileColumns(projectId, clientId) {
    return initialFileColumnsData;
    // return instance
    //   .post(`projects/${projectId}/datasets`, {
    //     datasetName: "dataset name",
    //     clientId: clientId,
    //     fileName: "dataset.csv",
    //     delimiter: ",",
    //     data: "{{DATASET FILE CONTENT BASE64ENCODED}}"
    //   })
    //   .then((response) => response.data);
  },

  getVariableAndGroupVariableList(businessCaseId = "5fe1dec0b7a84c41e12b1221") {
    return initialVariablesData;
    // return instance
    //   .get(`daas-businesscase/bc/${businessCaseId}`)
    //   .then((response) => response.data);
  },
  postProject(
    projectId,
    clientId,
    datasetId,
    originalColumnName,
    variableName,
    dataType,
    numberColumn
  ) {
    console.log(
      "POST to {{url_api_gateway}}/projects/{{projectId}}/datasets/{{datasetId}}/mapped?clientId={{clientId}}"
    );
    console.log(
      "originalColumnName:" + originalColumnName,
      "variableName:" + variableName,
      "dataType:" + dataType,
      "numberColumn:" + numberColumn
    );
    return {
      status: 200,
    };
    // return instance
    //   .post(
    //     `projects/${projectId}/datasets/${datasetId}/mapped?clientId=${clientId}`,
    //     {
    //       clientMappings: [
    //         {
    //           originalColumnName: originalColumnName,
    //           variableName: variableName,
    //           dataType: dataType,
    //           numberColumn: numberColumn,
    //         },
    //       ],
    //     }
    //   )
    //   .then((response) => response.data);
  },
};
