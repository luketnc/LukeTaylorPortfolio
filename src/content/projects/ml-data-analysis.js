export default {
    id: "ml-data-analysis",
    slug: "ml-data-analysis",
    title: "Big Data Analysis & ML Models",
    oneLiner: "Predictive modeling and big data analysis using Jupyter Notebooks and scikit-learn.",
    category: "Data Science & ML",
    tags: ["Python", "Machine Learning", "Data Science", "Jupyter"],
    status: "Completed",
    featured: true,
    content: `
## An AI-Powered Analysis and Prediction of Laptop Sales: Insights for Strategic Business Decisions

nullgarden  
Data Analytics Project Report  
November 17, 2024  

## Introduction

In today’s market, leveraging data-driven insights is essential for making informed business decisions. This report focuses on AI-powered analysis and predictions based on a laptop pricing data set and a laptop review data set. In this report my methods for applying descriptive, diagnostic, predictive, and prescriptive analytics are showcased in the context of addressing three critical business questions. For readability, I do not make commentary or insights on data until the prescriptive analysis section.  This report aims to bridge the gap between data analysis and strategic decision-making, showcasing how AI can optimize business outcomes in the technology retail sector as well as how it can empower individuals to understand complex math and statistical data. 

## Methodology

My approach to this project was to use Google Colab (A cloud hosted instance of Jupyter Notebook) to do the data analysis and take notes. I initially used Visual Studio code in my first draft, however this did not seem to be the right tool for the job and generally was much harder to produce interesting results. I also used ChatGPT to assist in some of the harder aspects of the code required in this project. The data set I selected for the bulk of my analyses was called “Laptop Prices Dataset” which was sourced from Juan Merino through Kaggle. I picked this data set for its wide range of data and its business implications. I also selected a second dataset called Laptop-ACOS for sentiment analysis on customer reviews of laptops. The next step in my methodology was to create business questions that were both interesting from a business perspective and answerable from the data available. I ultimately honed in on these 3:

1. What factors most significantly affect laptop prices?  
2. Can we predict the price of a laptop based on its features?  
3. What recommendations can we make to manufacturers to optimize laptop pricing?

These questions were specifically crafted to recommend methods or strategies for sellings laptops based on pricing data.

## Data Pre-Processing

An important step of any data analysis is both cleaning and processing the data. Skipping this step leaves your data analysis in danger of producing inaccurate results, having insignificant results (based on the sample group shrinking because of null values), and ultimately not being a very statistically interesting data set. To see what I was working with I initially checked for missing values by loading the data frame and checking for nulls in each column (Figure 1)  

<img src="/images/big-data-ml/image1.png" alt="Figure 1" style="width: 100%; border-radius: 8px; margin: 10px 0;" />

As shown above, the “GPU” column has a very large number of nulls, making this a field to avoid entirely for data analysis. Storage type has the same issues as 42 nulls is significant, potentially enough to skew results. However Screen only has 4 nulls so I decided to clean it up and proceed with this data set. The next issue is the CPU field is populated with strings, these strings cant be run through Seaborn so I decided to convert them to integers. The most applicable integers for CPU’s is CPU benchmarks which show how powerful each CPU is. I asked ChatGPT to give me the benchmark of each CPU based on the strings I provided and it gave me an associated benchmark speed. I then appended my data set with a new field called CPU\_Benchmark as seen below (Figure 2).  

<img src="/images/big-data-ml/image2.png" alt="Figure 2" style="width: 100%; border-radius: 8px; margin: 10px 0;" />

I also had a few preprocessing steps associated with the text mining side of my analysis. The data set I was using was formatted in .tsv instead of .csv which caused some issues when I attempted to load the data set. I was able to resolve this by stripping extra characters, converting everything to lowercase, and removing stopwords.

## Descriptive Analysis

Descriptive Analytics provides a summary of historical data, offering an overview of trends, patterns, and distributions to establish a baseline understanding of the dataset. This part of my analysis was relatively simple. I used the “df.describe()” command to give me a statistical summary of the data set that included count, mean, std, min, and max. This also gave me 25, 50 and 75 percentiles. These statistics offered a valuable snapshot of the dataset. The mean and median revealed central tendencies in pricing and specifications, while the standard deviation highlighted variability across features such as RAM and storage. Observing the spread between the minimum and maximum values for each variable made it clear that there was a robust range of options available in the laptop market. This initial summary not only helped me identify general trends but also set the stage for more detailed analyses later.

## Diagnostic Analysis

Diagnostic Analytics identifies the underlying causes of observed trends, using statistical techniques to examine relationships and correlations between variables.  
For diagnostic analytics, I wanted to answer the question of “What factors most significantly affect laptop prices?”. To accomplish this goal I decided to make a Correlation Matrix that showcased the significance of the laptop specs in relation to final price as well as each other. I did this by using seaborn to calculate the correlation coefficients for each pair of variables. (See Figure 3)  

<img src="/images/big-data-ml/image3.png" alt="Figure 3" style="width: 100%; border-radius: 8px; margin: 10px 0;" />

I also used Seaborn to make a pair plot that shows the relationship between variables in the data set. This visualization of the data was slightly less optimal compared to the correlation matrix because of the sheer size of the data set. (Figure 4)  

<img src="/images/big-data-ml/image4.png" alt="Figure 4" style="width: 100%; border-radius: 8px; margin: 10px 0;" />

Despite the less than optimal appearance of this graph, you can see clustering in screen, RAM and storage alluding to a preset or industry standard set of options for these features.

## Predictive Analysis

Predictive Analytics leverages historical data to forecast future trends, offering a glimpse into what might happen under specific conditions. For this predictive analysis I wanted to answer my second business question “Can we predict the price of a laptop based on its features?”. To build my predictive models, I separated the target variable (Final Price) from the feature variables. I then split the data into training and testing sets using an 80-20 ratio. This split ensured that the models were trained on the majority of the data while retaining a portion for evaluation. The next step in my predictive analysis was applying feature scaling to normalize the data, ensuring that variables with larger numerical ranges did not disproportionately influence the models. Next I had to choose a machine learning model based on its accuracy. For this step I asked ChatGPT and the wider internet and decided to focus on three machine learning models. The first was Linear Regression which captures the linear relationship between features and price. Next I decided to test the Decision Tree regressor model which focuses on non linear relationships and makes rule based predictions. Finally the last model I decided on was Random Forest Regressor which combines multiple decision trees to enhance accuracy. Each model was trained on the processed training data, allowing it to learn patterns and relationships between laptop features and pricing. Next, I needed to evaluate these models for which is used the Mean Absolute Error which measures the errors in the predictions and the R2 score which indicates how well the model explains variance in variables. The results of this analysis are below (Figure 5).  

<img src="/images/big-data-ml/image5.png" alt="Figure 5" style="width: 100%; border-radius: 8px; margin: 10px 0;" />

Among the models, the Random Forest Regressor performed best, achieving the lowest prediction error and the highest R2 score. Because of these results I decided to visualize the Random Forest Regression Predictions as seen below (Figure 6).  

<img src="/images/big-data-ml/image6.png" alt="Figure 6" style="width: 100%; border-radius: 8px; margin: 10px 0;" />

This model visually looks pretty accurate until the 1500 price point which is where the bulk of the laptops in this data set are. However there are some pretty extreme outliers, which suggest either some inaccuracies in the data or that our model is having trouble predicting the price for higher end laptops.

## Text Mining and Sentiment Analysis

For the sentiment analysis part of my analytics, I used a different data set to get insight on what customers review positively in laptops most often. To do this I had to calculate the sentiment score for each entry in the data set. After that I had to calculate sentiment based on polarity. My sentiment values were positive, negative, and neutral. Next I defined some topics to analyze the sentiment on which were price, storage, battery, display, screen, design, performance, audio, keyboard, ports and processor. Using matplotlib and the data I parsed I came up with this bar graph (Figure 7).  

<img src="/images/big-data-ml/image7.png" alt="Figure 7" style="width: 100%; border-radius: 8px; margin: 10px 0;" />

This graph indicates that the sentiment score for laptop components is very high for the price variable. This means that customers value price as a factor in their laptop purchasing decision making process.

## Prescriptive Analysis

Prescriptive analytics are the process of using data to determine a course of action. In the context of this project, I am going to be making recommendations to laptop manufacturers, sales teams, product design, and retailers based on my interpretation of the data. Below is a graph that I made to better visualize my findings (Figure 8).  

<img src="/images/big-data-ml/image8.png" alt="Figure 8" style="width: 100%; border-radius: 8px; margin: 10px 0;" />

To start I examined the correlation matrix (Figure 3) and found that the relationship between RAM and final price and storage and final price were quite strong (.73 and .7 respectively). Knowing this I believe that a good way of increasing the target market for certain laptop models is by having multiple options for RAM and storage so that consumers can decide if they want to sacrifice some memory or storage based on their needs. An AI chat bot on a customer facing website that prompts customers to list their needs (Rendering, Playing Video Games, Web Browsing etc) and then matches them with a list of computers that could satisfy their needs and a prediction of how long until that model is out of date. Furthermore RAM and storage both have different speed ratings that are not normally publicly advertised for laptops. Depending on the manufacturing process, the price of some laptops could be lowered if slower RAM or storage were to be used. The screen variable also sticks out in this model as being only .27 when correlated to final price. This suggests that for people aiming to use their laptop for menial/less resource intensive tasks, a laptop with a higher quality screen but less computing resources could be an attractive alternative for customers wanting to watch high quality videos on a budget. Considering that price has  the highest average sentiment score based on the data set of laptop reviews (Figure 7), making more budget laptops that are targeted at customers looking for specific features seems like a promising strategy. These recommendations answer my third business question, “What recommendations can we make to manufacturers to optimize laptop pricing?”.

## Conclusion

This report demonstrates the use of data analysis to uncover insights for optimizing laptop sales strategies. By applying descriptive, diagnostic, predictive, and prescriptive analytics to a laptop pricing dataset, I was able to address my business questions and offer actionable recommendations. The descriptive analysis revealed valuable insights into pricing and specifications of laptops, while the diagnostic analysis highlighted the significant factors influencing laptop prices, such as RAM and storage. Through predictive modeling, I demonstrated how AI can accurately forecast laptop prices based on key features. Furthermore, sentiment analysis of customer reviews provided additional perspectives, particularly on the importance of price in purchasing decisions. The prescriptive analysis culminated in targeted recommendations for manufacturers, such as offering customizable RAM and storage options, optimizing screen quality for budget laptops, and considering price-sensitive customers with specific products tailored for them. By leveraging these insights, businesses can not only improve their pricing strategies but also cater more effectively to diverse consumer needs in the laptop market. Overall, this project was a good exercise in data analytics. However, next time I would like to scrape my own data so I can have the same data for customer review sentiment analysis and the laptop pricing statistical analysis for even more valuable insights on specific computer models.

## Sources
* Sentiment Analysis Dataset: [PapersWithCode - Laptop-ACOS](https://paperswithcode.com/dataset/laptop-acos)
* Code Assistant: [ChatGPT](https://chatgpt.com/)
* Laptop Price Dataset: [Kaggle - Laptop Price Dataset](https://www.kaggle.com/datasets/juanmerinobermejo/laptops-price-dataset)
    `,
    overview: "",
    goal: "To demonstrate proficiency with machine learning algorithms and big data analysis using Python.",
    features: [
        "Data cleaning and exploratory data analysis",
        "Training multiple regression models (Linear, Decision Tree, Random Forest)",
        "Metric-based model evaluation (MSE, R2)"
    ],
    techStack: ["Python", "Jupyter Notebook", "Scikit-Learn", "Pandas"],
    results: "Successfully built and evaluated a predictive pipeline demonstrating which models performed best on the dataset.",
    lessons: "Understanding which metrics to optimize is as important as the model itself. Random Forests often overfit if not tuned correctly, but generally provide strong baseline results.",
    links: {
        repo: "",
        demo: "",
        writeup: ""
    }
};
