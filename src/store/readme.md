## `src/store`

 * Здесь хранятся все файлы, относящиеся к **стейт-менеджеру** проекта.

### Структура папки

* Весь стор разделяется на модули и помещается в папку `modules`
* Файлы и папки следует именовать в `camelCase`
* Структура:
  * `index.ts` - сам стор и его настройка
  * `store.type.ts` - типы
  * `rootSaga.saga.ts` - корневая сага
  * `rootReducers.reducer.ts` - корневой редьюсер
  * `/modules/` - директория со сторами, привязанными к страницам\сущностям проекта
* Пример структуры модуля:
  * `/modules/moduleName/` - директория модуля
  * `moduleName.slice.ts` | `moduleName.reducer` & `moduleName.action`
  * `moduleName.saga.ts`
  * `moduleName.type.ts`
