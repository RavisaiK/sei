# SEI Monorepo

## Integrated Monorepo workspace with host app as SEI with Dashboard and Users as remotes

### Installations:

Install Node 20+

### Libraries Used:
> NX 21 (Workspaces)

> Angular 20 (Application)

> Tailwind 4 (Styling)

> Axios (API Integration)

> ng2-charts (Charts)

### run the app
To run the dev server for the app, use:

```sh
npm install
```

```sh
npx nx serve sei
```

### Users

        [
            {
                username: emilys,
                password: emilyspass,
                role: user
            },
            {
                username: bronco,
                password: broncopass,
                role: admin
            }
        ]

