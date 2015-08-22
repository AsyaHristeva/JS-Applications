/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **groups** the animals by `species`
    *   the groups are sorted by `species` descending
*   **sorts** them ascending by `legsCount`
*   **prints** them to the console in the format:

```
    ----------- (number of underscores is equal to the length of the GROUP_1_NAME + 1)
    GROUP_1_NAME:
    ----------- (number of underscores is equal to the length of the GROUP_1_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in group 1
    NAME has LEGS_COUNT legs //for the second animal in group 1
    ----------- (number of underscores is equal to the length of the GROUP_2_NAME + 1)
    GROUP_2_NAME:
    ----------- (number of underscores is equal to the length of the GROUP_2_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in the group 2
    NAME has LEGS_COUNT legs //for the second animal in the group 2
    NAME has LEGS_COUNT legs //for the third animal in the group 2
    NAME has LEGS_COUNT legs //for the fourth animal in the group 2
```
*   **Use underscore.js for all operations**
_.reduce(jossWhedon.shows, function(memo, show) { return memo.concat(show.characters); }, []); 
=>[{ name: "Echo", role: "doll" }, { name: "Topher", ... }, { name: "Billy", ...}, ...] 
- See more at: http://singlebrook.com/blog/simplify-your-javascript-with-underscorejs#sthash.ZHBQcaam.dpuf
*/

function solve(){
  return function (animals) {
	  
	_.chain(animals)
	.sortBy('species')
  	.reverse()
	.groupBy('species') 
	.each(function (group, groupName) {
		
		dashesConsoleLog (groupName);
		
		_.chain(group).sortBy(function (animal) {   
			return animal.legsCount;
		})
		.each(function (animal) {  
			console.log(animal.name + ' has '+ animal.legsCount + ' legs'); 
		});
	});
	 
	function dashesConsoleLog (string) {
		var dashes='-';
		_.each( string, function(symbol) {
			dashes +='-';
		});
		console.log(dashes);
		console.log(string+':');  
		console.log(dashes);
	}
}; 
}
module.exports = solve;