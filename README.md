支持 ie 和 其他主流浏览器

仅支持POST和GET方法

用法示例：

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
    </head>
          <script src="ajax.js"></script>
          <script>
                 let params = {
                    method : 'GET',
                    url    : 'your server interface',
                    async  : true,
                    resolve: function(res){
                        console.log('success')
                    },
                    reject : function(res){
                        console.log('failed')
                    }
                 }
                 
                 ajax(params)
          </script>
    </body>
</html>
```
