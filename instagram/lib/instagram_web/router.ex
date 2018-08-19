
defmodule InstagramWeb.Router do
  use InstagramWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug InstagramWeb.Context
  end

  scope "/api" do
    pipe_through :api

    forward "/graphql", Absinthe.Plug,
      schema: InstagramWeb.GraphQL.Schema

    if Mix.env == :dev do
      forward "/graphiql", Absinthe.Plug.GraphiQL,
        schema: InstagramWeb.GraphQL.Schema
    end
  end
end
