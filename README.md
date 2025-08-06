# Keye Project Excel Spreadsheet. 

## To install all the dependencies please run 

**npm install** 

To run the application please run 

**npm start**

and access the UI at 

**localhost:3000**. 

The design is as follows:
I am using DataGrid from MaterialUI in order to build out the table and the functionalities outlined in the task.
I have split it in such a way to compartmentalize it for better maintaibility and scalability. 
This could have been improved further creating "EditableCell" component. 

Furthermore for the evaluate cells formula, I was planning to implement using Redux. 
I planned to create a redux store with the column as the key and an object (value, formula (string), and dependents (array of columns))

I'd define the actions to update the cells, trigger formula calculations etc. 
I'd create the reducers to handle state. 
I will have to memoize the cells so it doesn't trigger a rerender everytime a user makes an update to one cell. 

Also to make sure I'm not dispatching multiple actions too quickly as it triggers unnecessary rerenders. 