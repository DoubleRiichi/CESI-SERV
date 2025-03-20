require 'net/http'
require 'uri'

# uri = URI.parse("http://localhost:3000/api")
# response = Net::HTTP.get_response(uri)
# puts response.body

uri = URI.parse("http://localhost:3000/time")
response = Net::HTTP.get_response(uri)
puts response.body

# response.code
# response.body
