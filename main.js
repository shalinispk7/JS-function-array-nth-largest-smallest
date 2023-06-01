// nsmallest numbers
let arr=[25,3,45,-5,67,-7,8];
let n= parseInt(prompt("Enter nth element")); 
// let n=2;
document.write("Ascending order of the given element: ")


function nsmall(arr,n){
		for(i=0;i<arr.length;i++){
				for(j=i+1;j<arr.length;j++){
						if(arr[i]>arr[j]){  //> - ascending order
							let val=arr[j];
							arr[j]=arr[i];
							arr[i]=val;
						}
				}
			document.write(arr[i]+" ");
		}
	let small=arr[n-1];
	return small;
}
document.write ("<br>"+nsmall(arr,n))



