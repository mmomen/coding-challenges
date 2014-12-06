#https://www.hackerrank.com/challenges/gem-stones

puts "How many rocks?"
rocks = gets.chomp.to_i
rocks.times do
  
  gets.chomp
end

line_array = line.split("")
p line
p line_array




=begin
  
number
1group of elm
2group of elm
3group of elm
 
1. find the smallest string
2. loop through each character
3. see if the character exists in other strings

rocks = 3
rock_elements = "abcdde
baccd
eeabg"

puts rocks
puts rock_elements
rock_elements.gsub!("\n","\,")
puts rock_elements
# rock_elements.length.times do |x|
#   p rock_elements[x].chomp
# end


=end


