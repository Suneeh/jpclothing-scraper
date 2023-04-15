# JP-Clothing Web Scraper

# About this Repositroy

JP Performance has it's own clothing brand that releases new clothing collections every now and then. The shirts and hoodies are sold out completely when I got to check the shop most of the times. Since the announcement video for the new drop is some hours after the drop is available on the website I figured that could scrape the shop for new items so I could have a shot at buying my pieces befor most of the people notice.

# Getting started

If you want to scrape the shop yourself, you can clone this repository:

```
git clone git@github.com:Suneeh/jpclothing-scraper.git
```

and run the cypress scraper by calling:

```
npm run scrape
```

# In the future

In the future this will be built into a Dockerfile that will also notify me (by mail probably) whenever there is a difference in the scraping results from one run to another. It currently detects changes in the..

- .. url of a product
- .. price of a product
- .. name of a product
- .. amount of items per category

Currently does not detect:

- changes in the amount if amount befor and after are higher than 16 (pagination)

# Contribution

If you'd like to contribute in the sourcecode, please create a feature branch. Pull requests are warmly welcome.

# License

[MIT](https://opensource.org/license/mit/)
