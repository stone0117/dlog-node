const colors = [1, 4, 7, 31, 32, 33, 34, 35, 36, 37, 40, 41, 42, 43, 44, 45, 46, 47, 91, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 104, 105, 106, 107]

function dlog(obj, variableName = 'anonymous', trace = false) {
  if (trace) {console.trace()}
  let stack = getStack()
  // color_test(obj);
  // var o = {}
  // Error.captureStackTrace(o, dlog)
  // let stack = o.stack
  // console.log(stack)

  if (obj === '__func__') {
    logFunction(obj, variableName, stack)
  }
  else {
    finalPrint(obj, variableName, Object.prototype.toString.call(obj), stack)
  }
}

function logFunction(obj, variableName, stack) {
  let functionName = stack.getFunctionName()
  let func         = stack.getFunction()
  finalPrint('调用 ' + (functionName ? functionName : '匿名') + ' 方法' + ' | ' + '参数个数: ' + variableName.length, variableName, Object.prototype.toString.call(variableName), stack)
}

function getStack() {
  var origPrepareStackTrace = Error.prepareStackTrace
  Error.prepareStackTrace   = function (_, stack) {return stack}
  var err                   = new Error()
  var stack                 = err.stack
  Error.prepareStackTrace   = origPrepareStackTrace

  // var obj = {}
  // Error.captureStackTrace(obj, getStack)
  // console.log(obj.stack);

  // Remove superfluous function call on stack
  stack.shift() // getStack --> Error
  stack.shift() // getStack --> Error
  let stackElement = stack[0]

  // console.dir(stackElement.__proto__);
  //
  // // console.log(stackElement.constructor());
  // console.log(stackElement.getColumnNumber()) // 17
  // console.log(stackElement.getEvalOrigin()) // eval at createFunction (http://localhost:8080/js/vue/vue.js:11649:14)
  // console.log(stackElement.getFileName()) // undefined
  // console.log(stackElement.getFunction()) // ƒ () { dlog('__func__', arguments, false); }
  // console.log(stackElement.getFunctionName()) // before-enter
  // console.log(stackElement.getLineNumber()) // 4
  // console.log(stackElement.getMethodName()) // null
  // console.log(stackElement.getPosition()) // 514
  // console.log(stackElement.getPromiseIndex()) // null
  // console.log(stackElement.getScriptNameOrSourceURL()) // undefined
  // console.log(stackElement.getThis()) // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
  // console.log(stackElement.getTypeName()) // Window
  // console.log(stackElement.isAsync()) // false
  // console.log(stackElement.isConstructor()) // false
  // console.log(stackElement.isEval()) // true
  // console.log(stackElement.isNative()) // false
  // console.log(stackElement.isPromiseAll()) // false
  // console.log(stackElement.isToplevel()) // true
  // console.log(stackElement.toString()) // before-enter (eval at createFunction (http://localhost:8080/js/vue/vue.js:11649:14), <anonymous>:4:17)
  ///
  // 5
  // client.js?06a0:56 undefined
  // client.js?06a0:56 pages/article.js
  // client.js?06a0:56 undefined
  // client.js?06a0:56 asyncData
  // client.js?06a0:56 28
  // client.js?06a0:56 null
  // client.js?06a0:56 1164
  // client.js?06a0:56 null
  // client.js?06a0:56 pages/article.js
  // client.js?06a0:56 undefined
  // client.js?06a0:56 null
  // client.js?06a0:56 false
  // client.js?06a0:56 false (repeated 4 times)
  // client.js?06a0:56 true
  // client.js?06a0:56 asyncData (pages/article.js:28:5)

  return stackElement
}

// function getStackTrace() {
//   var obj = {}
//   Error.captureStackTrace(obj, getStackTrace)
//   return obj.stack
// }

function now_time() {
  var date         = new Date()
  var hours        = `${date.getHours()}`.padStart(2, '0')
  var minutes      = `${date.getMinutes()}`.padStart(2, '0')
  var seconds      = `${date.getSeconds()}`.padStart(2, '0')
  var milliseconds = `${date.getMilliseconds()}`.padStart(3, '0')
  return `${hours}:${minutes}:${seconds}:${milliseconds}`
}

function finalPrint(obj, variableName, typeStringValue, stack) {

  let columnNumber = stack.getColumnNumber()
  // let evalOrigin            = stack.getEvalOrigin()
  let fileName     = stack.getFileName()
  // let func                  = stack.getFunction()
  let functionName = stack.getFunctionName()
  let lineNumber   = stack.getLineNumber()
  // let methodName            = stack.getMethodName()
  // let position              = stack.getPosition()
  // let promiseIndex          = stack.getPromiseIndex()
  // let scriptNameOrSourceURL = stack.getScriptNameOrSourceURL()
  // let this1                 = stack.getThis()
  // let typeName              = stack.getTypeName()
  // console.log(columnNumber)
  // console.log(evalOrigin)
  // console.log(fileName)
  // console.log(func)
  // console.log(functionName)
  // console.log(lineNumber)
  // console.log(methodName)
  // console.log(position)
  // console.log(promiseIndex)
  // console.log(scriptNameOrSourceURL)
  // console.log(this1)
  // console.log(typeName)
  // console.log('■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■')

  let rootPath = process.cwd()

  let fileInfo = rootPath + '/' + fileName + ':' + lineNumber + ':' + columnNumber

  if (!fileName) {
    fileInfo = stack.toString()
  }

  if (!functionName) {
    functionName = '<anonymous>'
  }

  // console.group(
  //   // `%s %s <%s> :- ${green(' %s ')}${blue(' %s ')}${black(' = ↓')}`,
  //   `%c%s %c %s() %c <%s> :- %c %s %c %s %c = ↓`,
  //   'font-weight:normal;font-family: "JetBrains Mono"',
  //   fileInfo,
  //   'background-color:#FFDFA2;color:#AA7942;font-weight:100;font-family: "JetBrains Mono";line-height:18px',
  //   functionName,
  //   'font-weight:100',
  //   now_time(),
  //   'background-color:#025100;color:#FFF;font-weight:100;line-height:18px;font-size:12px;font-family:"JetBrains Mono"',
  //   variableName,
  //   'background-color:#078DFF;color:#FFF;font-weight:100;line-height:18px;font-size:12px;font-family:"JetBrains Mono"',
  //   typeStringValue,
  //   'color:black;font-weight:normal;',
  // )

  console.group(
    // `%s %s <%s> :- ${green(' %s ')}${blue(' %s ')}${black(' = ↓')}`,
    `${normal('%s')} ${normal('%s()')} ${blue('<%s>')} ${normal(':-')} ${normal('%s')} ${purple('%s')} ${normal('= ↓')}`,
    fileInfo,
    functionName,
    now_time(),
    // variableName,
    typeStringValue === '[object Arguments]' ? `Arguments(${Object.keys(variableName).length})` : variableName,
    typeStringValue,
  )
  console.log(obj)

  if (typeStringValue === '[object Arguments]') {
    // console.dir(variableName);
    for (let key in variableName) {
      // console.log(blue(key), Object.prototype.toString.call(variableName[key]), '->', variableName[key])
      // console.dir(variableName[key])
      console.log(
        // `%s %s <%s> :- ${green(' %s ')}${blue(' %s ')}${black(' = ↓')}`,
        `${blue('%s')} ${purple('%s')} ${normal('->')}`,
        key,
        Object.prototype.toString.call(variableName[key]),
      )
      console.log('===>', variableName[key])
      // console.dir(variableName[key]);
    }
  }
  console.groupEnd()
}

function choose_color(content, color_index) {return `\x1b[0;1;7m${content}\n\x1b[0m`}

function blue(content) {return `\x1b[${colors[6]}m${content}\x1b[0m`}

function purple(content) {return `\x1b[${colors[21]}m${content}\x1b[0m`}

function green_with_bordered(content) {return `\x1b[7;32;48m${content}\x1b[0m`}

function green(content) {return `\x1b[${colors[4]}m${content}\x1b[0m`}

function red(content) {return `\x1b[${colors[3]}m${content}\x1b[0m`}

function black(content) {return `\x1b[${colors[32]}m${content}\x1b[0m`}

function cyan(content) {return `\x1b[${colors[31]}m${content}\x1b[0m`}

function normal(content) {return `\x1b[${colors[0]}m${content}\x1b[0m`}

function getAllInformation(obj) {
  let res = getMethods(obj)
  console.warn('%o', res)
  return res
}

function getMethods(obj) {
  var res = {
    methods   : [],
    properties: [],
    // computedStyle: getComputedStyle(obj, null),
  }
  if (obj instanceof Node) {
    res.cssList       = []
    let computedStyle = getComputedStyle(obj, null)
    for (let key in computedStyle) {
      if (/[0-9]+/.test(key) === false) {
        // console.log(key, computedStyle[key])
        res.cssList.push({
          // [key]: computedStyle[key],
          key  : key,
          value: computedStyle[key],
          type : Object.prototype.toString.call(computedStyle[key]),
        })
      }
    }
  }
  for (let key in obj) {
    if (typeof obj[key] == 'function') {
      res.methods.push({
        key           : key,
        value         : obj[key],
        type          : Object.prototype.toString.call(obj[key]),
        parameterCount: obj[key].length,
      })
    }
    else {
      res.properties.push({
        key  : key,
        value: obj[key],
        type : Object.prototype.toString.call(obj[key]),
        // type:typeof obj[m]
      })
    }
  }

  res.methods.sort((a, b) => a.key.localeCompare(b.key))
  res.properties.sort((a, b) => a.key.localeCompare(b.key))
  if (res.cssList) {res.cssList.sort((a, b) => a.key.localeCompare(b.key))}

  return res
}

global.dlog = dlog

