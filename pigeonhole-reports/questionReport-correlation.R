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

## Remove all empty stuff
questionsFiltered <- 
  questionsALL[!grepl("^(\\s|,)*$",questionsALL$actual),]


corr <- numeric(0)
itemNum <- numeric(0)

for (i in 1:75) {
  qq1 <- questionsFiltered[questionsFiltered$item==i,]
  cc <- cor(qq1$grade, qq1$totalGrade)
  corr <- c(corr,cc)
  itemNum <- c(itemNum,i)
}

#barplot(corr, names.arg=itemNum)

qSummary <- 
  aggregate(grade ~ item, 
            data = questionsFiltered, 
            FUN=mean)
qCount <- 
  aggregate(questionCount ~ item,
            data = questionsFiltered,
            FUN=sum)
qUltimate <- merge(qSummary, qCount, by="item")

qUltimate$corr <- corr

cleaner <- qUltimate[abs(qUltimate$grade - 0.5) < 0.3, ]

cleaner[with(cleaner, order(-corr)), ]


questionsFiltered$gradeCategorical <- paste0("",questionsFiltered$grade)

barPlot <- 
  ggplot(data = questionsFiltered, 
         aes(x = item, y=questionCount, fill = gradeCategorical)) + 
  geom_bar(stat="identity")+
  labs(x = "Jaut\u0101juma Nr.", y="Netuk\u0161\u0101s atbildes") +
  guides(fill=guide_legend(title="V\u0113rt\u0113jums"))+
  theme_minimal()
barPlot




