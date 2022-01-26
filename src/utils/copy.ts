
export function copy(text: string) {
  navigator.clipboard.writeText(text).then(function () {
     /* clipboard successfully set */
    console.log('clipboard successfully: ', text);
  }, function(error) {
    /* clipboard write failed */
    console.log('clipboard write failed');
  })
}