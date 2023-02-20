# syntax=docker/dockerfile:1
FROM ruby:3.2.0
RUN apt-get update -qq
WORKDIR /app
COPY Gemfile /app/Gemfile

RUN bundle install

# Copy application code
COPY . .

RUN rails app:update:bin

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# Configure the main process to run when running the image
CMD ["./bin/rails", "server", "-b", "0.0.0.0"]