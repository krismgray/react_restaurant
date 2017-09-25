10.times do
  Menu.create(
    item: Faker::Food.dish, 
    name: Faker::Pokemon.name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f
  )
end

puts 'seed generated!'
