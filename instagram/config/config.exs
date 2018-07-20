# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :instagram,
  ecto_repos: [Instagram.Repo]

# Configures the endpoint
config :instagram, InstagramWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "fJ3kydjy4KevTBxt4rodhroCBgpEL1dScR4knwefB8DM3mvDknc/1oYDwagfoyM6",
  render_errors: [view: InstagramWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Instagram.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Configures Guardian
config :instagram, InstagramWeb.Auth.Guardian,
  issuer: "instagram",
  verify_issuer: true,
  secret_key: "C15f6nIiMpRirW4/69PqE09Qls7MscLBN1qL9Se2xqbVxLGNj+HFD6BQ8amNP77H"

# AWS
config :ex_aws,
  access_key_id: System.get_env("AWS_ACCESS_KEY_ID"),
  secret_access_key: System.get_env("AWS_SECRET_ACCESS_KEY"),
  s3: [
    scheme: "https://",
    host: "instagram-clone-beta.s3.amazonaws.com",
    region: "us-east-1"
  ] 

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
