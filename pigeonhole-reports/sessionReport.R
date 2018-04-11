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

myPalette <- brewer.pal(6, "Set1")

sessionsALL$examCount = rep(1,times=nrow(sessionsALL))

sessionsALL$examType <- factor(sessionsALL$examType, 
                                     levels = c("random","intro","generalizations","combinatorics", "shapes", "number-theory"))

# sessionsAggregate <- 
#   aggregate(examCount ~ YyyyMmDd + examType, 
#             data = sessionsALL, 
#             FUN=sum)

barPlot <- 
  ggplot(data = sessionsALL, 
         aes(x = YyyyMmDd, y=examCount, fill = examType)) + 
  geom_bar(stat="identity") +
  scale_fill_manual(values=myPalette) +
  scale_x_discrete(limits = rev(levels(sessionsALL$YyyyMmDd))) +
  labs(x = "Datums", y="Testu skaits") +
  guides(fill=guide_legend(title="Testa veids"))+
  coord_flip() +
  theme_minimal()
barPlot
