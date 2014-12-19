def string_index(num)
  if num[-1].to_i + 1 == 10 #if incrementing last digit gives 10
    num = string_index(num[0...num.length-1]) + '0' #change num to equal the string_index of the number excluding the last digit + 0 as a string
  elsif num == '' # if num is empty, because original is all 9s num will become 1
    num = '1'
  else
    num[-1] = (num[-1].to_i + 1).to_s #here simply increment the last character by one and convert to string
  end
  return num
end

# puts string_index('1000000')
# puts string_index('1039')
# puts string_index('145999')
puts string_index('9999')