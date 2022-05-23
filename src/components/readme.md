## `src/components`

 * Здесь мы храним переиспользуемые компоненты.
 * Переиспользуемые компоненты - это те, что отвязаны от бизнес-сущностей, и могут быть использованы/используются в разных местах проекта.
 * Если компонент используется в разных местах, но привязан к конкретной бизнес-сущности - скорее всего его следует хранить в директории страницы, привязанной к этой сущности.

### Структура папки с компонентом

* Имена папок с компонентами и файлы внутри них должны быть в *camelCase*, например, `abstractRegistry`, `textField`
* Внутри могут храниться дополнтельные компоненты (как в виде отдельного файла, так и директории), которые используются только в изначальном компоненте
* Структура:
    * `index.tsx` - компонент
    * `componentName.type.ts` - типы, используемые только в этом компоненте
    * `componentName.hook.ts` - хуки, используемые только в этом компоненте
    * `componentName.util.ts` - утилиты, используемые только в этом компоненте
    * `componentName.module.scss` - стили компонента
    * `/bigSubComponentName/` - папка с дополнительным компонентом, внутри которой повторяется такая же, как эта, структура
    * `smallSubComponentName.component.tsx` - небольшой компонент, для которого нет необходимости создавать отдельную директорию