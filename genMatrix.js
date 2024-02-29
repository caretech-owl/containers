"use strict";

const generateBuildMatrix = (filesAdded, filesModified, filesRenamed) => {
  console.log(filesAdded);
  console.log(filesModified);
  console.log(filesRenamed);

  // Return null if there are no entries so we can skip the matrix step
  return null;
};

module.exports = generateBuildMatrix;
