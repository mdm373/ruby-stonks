# Ruby Stonks AWS

> AWS setup up for tradin' stonks


## Set Up
* Install AWS CLI
* Get SSO Set Up
  * [See IAM Identity Center Getting Started](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html)
  * Config CLI for SSO`aws configure sso`
  * Update user terminal profile to export sso generated profile name as default `AWS_PROFILE` env var

      **Powershell**
      ```
      $env:AWS_PROFILE = "sso-profile"
      ```
## Login

* `aws sso login`