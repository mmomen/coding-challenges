store = Hash.new(0)
str = 'abcba'
new_str = str.split('')
new_str.each do |x|
  store[x] += 1
end

# p 1.even?
puts store
# store.values.all? {|x| puts x}
count = 0
single_count = false
store.each do |x,y|
  if y.even?
    count += 1
  elsif y == 1
    single_count += 1
  end
end


# if str.length is odd, str.length == count * 2 && single_count = 1
# if str.length is even, str.length == count * 2 && single_count = 0
# fix to remove the * 2