This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Инфа об архитектуре

    Модули на одном слое могут знать только о модулях со слоев строго ниже, и как следствие, импортировать только с них.

    Слои:
        - app - роутинг, сетап проекта и т.д;
        - features - куски функциональности, которые нужны конечному пользователю;
        - entities - бизнес сущности приложения;
        - kernel - связи сущностей друг с другом;
        - shared - переиспользуемая логика (например, uikit).
