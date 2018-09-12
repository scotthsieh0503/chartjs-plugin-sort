# chartjs-plugin-sort
ChartJS plugin that allows you to sort by reference array or custom sort funciton 

# Installation
```
npm install chartjs-plugin-sort
```

## default options 
```
{
  enable: false,
  mode: 'function',
  reference: [],
  sortBy: 'label',
  order: 'asc',
  sortFunction: (a, b) => {
    if (a.label < b.label) return -1
    if (a.label > b.label) return 1
    return 0
}
```
## Adding your own custom sort function
You can add your own sorting function by implementing any function that has the same interfance with Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
And place it in the options.plugin.sort 

```
  var chart = new Chart(ctx, {
                type: 'bar',
                options: {
                    plugins: {
                        sort:
                            {
                                sortFunction: (a,b) => {/** implement your own sort function here **/}
                            }
                    }
```
                    
## Using a Reference Sort array
Alternatively you can provide an array that is already sorted in the order you want and pass it over the the plugin by switching the mode to 'array' and provide a 'reference' array on how you would like your dataset and label to be sorted

```
  var chart = new Chart(ctx, {
                type: 'bar',
                options: {
                    plugins: {
                      mode: 'array',
                      reference: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"]
                    }
