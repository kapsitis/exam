setwd("/Users/kapsitis/workspace/exam/pigeonhole-reports/")

require(plyr)
require(Unicode)
require(ggplot2)
require(RColorBrewer)

sessionsALL <- read.table(
  file="sessions.csv", 
  sep=",",
  header=TRUE,
  row.names=NULL,  
  fileEncoding="UTF-8")

#myPalette <- brewer.pal(6, "Set1")
myPalette <- rainbow(6)

## add dummy column with all ones
sessionsALL$examCount = rep(1,times=nrow(sessionsALL))

sessionsALL$examType <- factor(sessionsALL$examType, 
                               levels = c("random","intro","generalizations","combinatorics", "shapes", "number-theory"))

sessionsALL$percentage <- round(100*sessionsALL$totalGrade/sessionsALL$maxGrade, digits=2)

# scoreGroup
xx <- character()
for (i in 1:nrow(sessionsALL)) {
  if (sessionsALL$percentage[i] < 0.1) {
    tt <- "0%"
  } else if (sessionsALL$percentage[i] < 20.1) {
    tt <- "(0%;20%]"
  } else if (sessionsALL$percentage[i] < 40.1) {
    tt <- "(20%;40%]"
  } else if (sessionsALL$percentage[i] < 60.1) {
    tt <- "(40%;60%]"
  } else if (sessionsALL$percentage[i] < 80.1) {
    tt <- "(60%;80%]"
  } else {
    tt <- "(80%;100%]"
  }
  xx <- c(xx,tt)
}

sessionsALL$scoreGroup <- xx
sessionsALL$scoreGroup <- factor(sessionsALL$scoreGroup, 
                               levels = rev(c("0%","(0%;20%]","(20%;40%]","(40%;60%]", "(60%;80%]", "(80%;100%]")))


sessionsAggregate <- 
  aggregate(examCount ~ scoreGroup, 
            data = sessionsALL, 
            FUN=sum)


bp<- ggplot(sessionsAggregate, aes(x="", y=examCount, fill=scoreGroup)) +
  geom_bar(width = 1, stat = "identity") + 
  coord_polar("y", start=-pi/2, direction=-1) + 
  scale_fill_manual(values=rev(myPalette)) +
  theme_minimal()

bp

