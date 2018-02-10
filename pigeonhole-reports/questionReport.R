setwd("/Users/kapsitis/workspace/exam/pigeonhole-reports/")

require(plyr)
require(Unicode)
require(ggplot2)
require(RColorBrewer)

questionsALL <- read.table(
  file="questions.csv", 
  sep=",",
  header=TRUE,
  row.names=NULL,  
  fileEncoding="UTF-8")

questionsALL$questionCount = rep(1,times=nrow(questionsALL))

keys <- as.numeric(names(table(questionsALL$item)))
vals <- as.vector(table(questionsALL$item))

barplot(vals, names.arg=keys)

## Remove all empty stuff
questionsFiltered <- 
  questionsALL[!grepl("^(\\s|,)*$",questionsALL$actual),]

qSummary <- 
  aggregate(grade ~ item, 
            data = questionsFiltered, 
            FUN=mean)
qCount <- 
  aggregate(questionCount ~ item,
            data = questionsFiltered,
            FUN=sum)
qUltimate <- merge(qSummary, qCount, by="item")





